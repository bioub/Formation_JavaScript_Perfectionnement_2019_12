const fs = require('fs');

// SYNC
try {
  const content = fs.readFileSync('.editorconfig', { encoding: 'utf-8' });
  fs.writeFileSync('.editorconfig.copy', content);
  console.log('Copy SYNC done');
} catch (err) {
  console.log(err);
}

// ASYNC
// Callback Hell / Pyramid of Doom
fs.readFile('.editorconfig', { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.editorconfig.copy', content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy ASYNC done');
      }
    });
  }
});

// ^
// |                            writeFile                      lg
// |readFile ...                =>        ...                  =>
// +------------------------------------------------------------------->

// ASYNC Promise
// Les promesses ne fonctionne que si le callback est appelé 1 seule fois
// sinon on pourrait utiliser des Observables (via une lib rxjs pour l'instant)
fs.promises.readFile('.editorconfig', { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile('.editorconfig.copy', content))
  .then(() => console.log('Copy ASYNC done'))
  .catch((err) => console.log(err));

// ES8 async / await
async function copyEditorConfig() {
  try {
    const content = await fs.promises.readFile('.editorconfig', { encoding: 'utf-8' });
    await fs.promises.writeFile('.editorconfig.copy', content);
    console.log('Copy ASYNC done');
  } catch (err) {
    console.log(err);
  }
}

copyEditorConfig();
