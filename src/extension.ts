import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('dev-roulette.play', () => {
        const panel = vscode.window.createWebviewPanel(
            'rouletteGame',
            'Dev Roulette',
            vscode.ViewColumn.One,
            { enableScripts: true }
        );

        panel.webview.html = getRouletteHtml();
    });

    context.subscriptions.push(disposable);
}

function getRouletteHtml() {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #1e1e1e; color: white; font-family: sans-serif; }
                #wheel { width: 300px; height: 300px; border-radius: 50%; border: 10px solid #444; position: relative; transition: transform 4s cubic-bezier(0.1, 0, 0.1, 1); overflow: hidden; }
                .peg { position: absolute; width: 100%; height: 2px; background: rgba(255,255,255,0.2); top: 50%; transform-origin: 50% 50%; }
                #pointer { width: 0; height: 0; border-left: 15px solid transparent; border-right: 15px solid transparent; border-top: 30px solid red; position: absolute; top: -10px; z-index: 10; }
                button { margin-top: 30px; padding: 10px 20px; font-size: 1.2rem; cursor: pointer; background: #007acc; color: white; border: none; border-radius: 5px; }
                #result { margin-top: 20px; font-size: 1.5rem; font-weight: bold; }
            </style>
        </head>
        <body>
            <div style="position: relative;">
                <div id="pointer"></div>
                <div id="wheel">
                    ${Array.from({length: 37}).map((_, i) => `<div class="peg" style="transform: rotate(${i * (360/37)}deg)"></div>`).join('')}
                </div>
            </div>
            <button onclick="spin()">SPIN</button>
            <div id="result">Place your bet!</div>

            <script>
                function getColor(number) {
                    if (number === 0) return "Green";
                    const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
                    return redNumbers.includes(number) ? "Red" : "Black";
                }

                let currentRotation = 0;
                function spin() {
                    const resultDiv = document.getElementById('result');
                    const wheel = document.getElementById('wheel');
                    
                    const extraSpins = 5 + Math.floor(Math.random() * 5);
                    const randomDegree = Math.floor(Math.random() * 360);
                    currentRotation += (extraSpins * 360) + randomDegree;
                    
                    wheel.style.transform = "rotate(" + currentRotation + "deg)";
                    resultDiv.innerText = "Spinning...";

                    setTimeout(() => {
                        const actualDegree = currentRotation % 360;
                        const number = Math.floor((360 - (actualDegree)) / (360/37)) % 37;
                        const color = getColor(number);
                        resultDiv.innerText = "Result: " + number + " - " + color;
                    }, 4000);
                }
            </script>
        </body>
        </html>
    `;
}