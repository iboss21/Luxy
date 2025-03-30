# Self-Hosted AI Coding Agent

Welcome to the **Self-Hosted AI Coding Agent** project! This guide walks you through setting up a powerful, AI-driven coding environment on your own hardware. Think of it as your personal, local version of Replit, Cursor, or GitHub Codespaces—no cloud, no subscriptions, just your machine doing the work.

## Why Build This?
- **Cost**: Free, aside from electricity.
- **Privacy**: Your code stays on your machine.
- **Customization**: Tailor it to your workflow.
- **Learning**: Gain skills in AI, web dev, and system setup.

## What You’ll Create
- A web-based coding interface with AI-powered code generation, debugging, and autocomplete.
- Tools for project management: create projects, upload ZIP files, clone Git repos, and preview projects locally.

## Prerequisites

### Hardware
- **CPU**: High-performance, e.g., Intel i9-9900K.
- **GPU**: NVIDIA with 12GB+ VRAM, e.g., RTX 4070 SUPER.
- **RAM**: 64GB+ DDR4.
- **Storage**: 2TB SSD with 500GB+ free.
- **Cooling**: AIO liquid cooler recommended.
- **OS**: Windows 10 Pro (Linux notes included).

### Software
- Internet connection for downloads.
- Basic command-line familiarity.

## Step 1: Hardware Setup and Optimization
Ensure your hardware is ready:
- **Verify Components**: Check CPU, GPU, RAM, and SSD in BIOS.
- **Cooling**: Mount AIO cooler (top/front), fans exhausting out. Set fan curves in BIOS (CPU ramp at 60°C, max at 80°C).
- **Drivers**: Update GPU drivers from [NVIDIA](https://www.nvidia.com/Download/index.aspx). Check BIOS updates on your motherboard’s site (e.g., [ASUS](https://www.asus.com/support/)).
- **Stability Test**: Monitor temps with [HWMonitor](https://www.cpuid.com/softwares/hwmonitor.html). Stress test with [Prime95](https://www.mersenne.org/download/) (CPU) and [FurMark](https://geeks3d.com/furmark/) (GPU). Aim for CPU <85°C, GPU <75°C.

## Step 2: Software Installation
Install the tools:
- **Python 3.10+**: [Download](https://www.python.org/downloads/), install with “Add to PATH”. Verify: `python --version`.
- **Git**: [Download](https://git-scm.com/download/win), install with CLI option. Verify: `git --version`.
- **Node.js (LTS)**: [Download](https://nodejs.org/), install. Verify: `node --version`.
- **CUDA/cuDNN**: Get CUDA from [NVIDIA](https://developer.nvidia.com/cuda-downloads), cuDNN from [NVIDIA Developer](https://developer.nvidia.com/cudnn). Verify: `nvcc --version`.
- **Tesseract OCR**: [Download](https://github.com/UB-Mannheim/tesseract/wiki), install to `C:\Program Files\Tesseract-OCR`, add to PATH. Verify: `tesseract --version`.
- **Python Libraries**:
  ```bash
  pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
  pip install flask flask-cors gunicorn transformers accelerate bitsandbytes pillow pytesseract zipfile36
  ```
- **Node.js Tools**: `npm install -g serve vercel`
- **Nginx**: [Download](http://nginx.org/en/download.html), extract to `C:\nginx`. Verify: `nginx -v`

## Step 3: AI Model Configuration
Use **CodeLLaMA 13B** for coding assistance:
- **Set Up Directory**:
  ```bash
  mkdir C:\ai_coding_agent
  cd C:\ai_coding_agent
  mkdir uploads projects static templates
  ```
- **Create `model.py`**:
  ```python
  from transformers import AutoModelForCausalLM, AutoTokenizer
  import torch

  model_name = "codellama/CodeLlama-13b-hf"
  tokenizer = AutoTokenizer.from_pretrained(model_name)
  model = AutoModelForCausalLM.from_pretrained(
      model_name,
      torch_dtype=torch.float16,
      load_in_4bit=True,
      device_map="auto"
  )

  def generate_response(prompt, max_length=500):
      inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
      outputs = model.generate(inputs["input_ids"], max_length=max_length)
      return tokenizer.decode(outputs[0], skip_special_tokens=True)

  if __name__ == "__main__":
      print(generate_response("Write a Python function to add two numbers"))
  ```
- **Run**: `python model.py` to download the model (~7GB).

## Step 4: Building the Web Application
Create a Flask app with a chat interface and code editor:
- **Create `app.py` in `C:\ai_coding_agent`**:
  ```python
  from flask import Flask, request, jsonify, render_template
  from flask_cors import CORS
  import os
  import subprocess
  import zipfile
  from model import generate_response

  app = Flask(__name__)
  CORS(app)

  UPLOAD_FOLDER = 'uploads'
  PROJECTS_FOLDER = 'projects'
  app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

  @app.route('/')
  def index():
      return render_template('index.html')

  @app.route('/chat', methods=['POST'])
  def chat():
      data = request.json
      prompt = data.get('message', '')
      response = generate_response(prompt)
      return jsonify({'response': response})

  @app.route('/create_project', methods=['POST'])
  def create_project():
      data = request.json
      project_name = data.get('project_name', '')
      project_path = os.path.join(PROJECTS_FOLDER, project_name)
      os.makedirs(project_path, exist_ok=True)
      with open(os.path.join(project_path, 'index.html'), 'w') as f:
          f.write('<h1>Hello, World!</h1>')
      return jsonify({'status': 'success'})

  @app.route('/upload_zip', methods=['POST'])
  def upload_zip():
      file = request.files['file']
      zip_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
      file.save(zip_path)
      project_name = file.filename.rsplit('.', 1)[0]
      project_path = os.path.join(PROJECTS_FOLDER, project_name)
      with zipfile.ZipFile(zip_path, 'r') as zip_ref:
          zip_ref.extractall(project_path)
      os.remove(zip_path)
      return jsonify({'status': 'success'})

  @app.route('/git_clone', methods=['POST'])
  def git_clone():
      data = request.json
      repo_url = data.get('repo_url', '')
      project_name = repo_url.split('/')[-1].replace('.git', '')
      project_path = os.path.join(PROJECTS_FOLDER, project_name)
      subprocess.run(['git', 'clone', repo_url, project_path], check=True)
      return jsonify({'status': 'success'})

  @app.route('/preview', methods=['POST'])
  def preview():
      data = request.json
      project_name = data.get('project_name', '')
      project_path = os.path.join(PROJECTS_FOLDER, project_name)
      subprocess.Popen(['serve', '-s', project_path, '-p', '3000'])
      return jsonify({'url': 'http://localhost:3000'})

  if __name__ == '__main__':
      app.run(debug=True)
  ```
- **Create `templates/index.html`**:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AI Coding Agent</title>
      <link rel="stylesheet" href="/static/style.css">
  </head>
  <body>
      <div class="container">
          <h1>AI Coding Agent</h1>
          <div id="chat">
              <input type="text" id="message" placeholder="Ask the AI...">
              <button onclick="sendMessage()">Send</button>
              <div id="chat-output"></div>
          </div>
          <div id="editor">
              <textarea id="code" placeholder="Write your code here..."></textarea>
          </div>
      </div>
      <script src="/static/script.js"></script>
  </body>
  </html>
  ```
- **Create `static/style.css`**:
  ```css
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f0f0f0;
  }
  .container {
      max-width: 1200px;
      margin: auto;
  }
  #chat, #editor {
      margin: 20px 0;
  }
  #message, #code {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
  }
  #chat-output {
      border: 1px solid #ccc;
      padding: 10px;
      min-height: 100px;
  }
  ```
- **Create `static/script.js`**:
  ```javascript
  async function sendMessage() {
      const message = document.getElementById('message').value;
      const response = await fetch('/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message })
      });
      const data = await response.json();
      document.getElementById('chat-output').innerHTML += `<p>${data.response}</p>`;
  }
  ```
- **Test**: Run `python app.py`, visit `http://localhost:5000`, and ask the AI: “Write a Python loop”.

## Step 5: Enhancing the Application
Add autocomplete and project templates:
- **Autocomplete with CodeMirror**:
  - Install: `npm install codemirror`
  - Update `index.html`:
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/codemirror.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/codemirror.min.css">
    <script>
        window.onload = function() {
            var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
                lineNumbers: true,
                mode: 'python'
            });
        };
    </script>
    ```
- **Project Templates**: Update `create_project` in `app.py`:
  ```python
  @app.route('/create_project', methods=['POST'])
  def create_project():
      data = request.json
      project_name = data.get('project_name', '')
      project_type = data.get('project_type', 'basic')
      project_path = os.path.join(PROJECTS_FOLDER, project_name)
      os.makedirs(project_path, exist_ok=True)
      if project_type == 'flask':
          with open(os.path.join(project_path, 'app.py'), 'w') as f:
              f.write('from flask import Flask\napp = Flask(__name__)\n@app.route("/")\ndef hello():\n    return "Hello, World!"')
      else:
          with open(os.path.join(project_path, 'index.html'), 'w') as f:
              f.write('<h1>Hello, World!</h1>')
      return jsonify({'status': 'success'})
  ```

## Step 6: Automation and Reliability
- **Nginx Configuration**: Edit `C:\nginx\conf\nginx.conf`:
  ```
  http {
      server {
          listen 80;
          location / {
              proxy_pass http://localhost:5000;
              proxy_set_header Host $host;
              proxy_set_header X-Real-IP $remote_addr;
          }
      }
  }
  ```
  Start: `cd C:\nginx && start nginx`
- **Auto-Start**: Create `start.bat` in `C:\ai_coding_agent`:
  ```
  @echo off
  cd C:\nginx
  start nginx
  cd C:\ai_coding_agent
  python app.py
  ```
  Add to Startup: `Win + R` > `shell:startup` > Drop `start.bat` there.

## Step 7: Testing and Usage
- **Chat Test**: Ask “Generate a sorting algorithm”.
- **Project Test**: Create a Flask app via the API, preview at `http://localhost:3000`.

## Troubleshooting
- **AI Slow**: Use CodeLLaMA 7B or adjust quantization.
- **Nginx Issues**: Check `C:\nginx\logs\error.log`.

---

You’ve now got a self-hosted AI coding agent! Customize it, expand it, or enjoy coding with your own AI assistant. For issues or ideas, open an issue or PR. Happy coding!
```
