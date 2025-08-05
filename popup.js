document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const convertBtn = document.getElementById('convertBtn');
    const resultInput = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');

    convertBtn.addEventListener('click', () => {
        const originalUrl = urlInput.value;
        const regex = /\/d\/([a-zA-Z0-9_-]+)/;
        const match = originalUrl.match(regex);

        if (match && match.length > 1) {
            const fileId = match.pop();
            const directUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            resultInput.value = directUrl;
        } else {
            resultInput.value = "Error: Invalid URL format.";
        }
    });

    copyBtn.addEventListener('click', () => {
        const resultUrl = resultInput.value;

        if (!resultUrl || resultUrl.startsWith("Error:")) {
            return;
        }

        navigator.clipboard.writeText(resultUrl).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500); // Slightly shorter feedback time
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            resultInput.value = "Copy failed. Check console.";
        });
    });
});