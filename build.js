const fs = require('fs');
const path = require('path');

/*
 * CRAFTS CSS Build Script
 * Concatenates all CSS files in the correct order
 * Creates both semantic and full framework versions
 */

// Core files (semantic version - minimal)
const coreFiles = [
  'src/core/_variables.css',
  'src/core/_reset.css', 
  'src/core/_semantic.css'
];

// Full framework files (complete build)
const fullFiles = [
  ...coreFiles,
  'src/components/_icons.css',
  'src/components/_theme-toggle.css',
  'src/components/_buttons.css',
  'src/components/_navbar.css',
  'src/components/_cards.css',
  'src/components/_forms.css',
  'src/components/_footer.css',
  'src/layout/_grid.css',
  'src/layout/_layout.css',
  'src/utilities/_utils.css',
  'src/utilities/_themes.css',
  'src/components/_badges.css'
];

function buildCSS(files, outputPath) {
  let output = `/*! CRAFTS CSS v1.0.0 - ${new Date().toISOString().split('T')[0]} */\n`;
  output += '/*! https://github.com/TechnoVen/crafts */\n\n';
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      output += `\n/* === ${path.basename(file)} === */\n\n`;
      output += fs.readFileSync(file, 'utf8') + '\n';
    } else {
      console.log(`⚠️  Missing: ${file}`);
    }
  });

  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  fs.writeFileSync(outputPath, output);
  console.log(`✅ Built ${outputPath}`);
}

// Build semantic version (core only)
buildCSS(coreFiles, 'dist/crafts-semantic.css');

// Build full version
buildCSS(fullFiles, 'dist/crafts.css');

console.log('🎉 Build complete!');
console.log('📁 dist/crafts-semantic.css - Core semantic styles');
console.log('📁 dist/crafts.css - Full framework with components');
