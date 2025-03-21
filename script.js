require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.38.0/min/vs' }});

require(["vs/editor/editor.main"], function () {
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: "// Écris ton code ici...",
        language: "javascript",
        theme: "vs-dark"
    });

    document.getElementById("language").addEventListener("change", function () {
        monaco.editor.setModelLanguage(editor.getModel(), this.value);
    });

    document.getElementById("run").addEventListener("click", function () {
        const code = editor.getValue();
        const preview = document.getElementById("preview").contentWindow.document;

        preview.open();
        preview.write("<script>" + code + "<\/script>");
        preview.close();
    });
});
