const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = path.join(__dirname, '../public/images')
const outputDir = path.join(__dirname, '../public/images')

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Process each image
async function processImage(filename) {
  const inputPath = path.join(inputDir, filename)
  const outputPath = path.join(
    outputDir,
    filename.replace(/\.(jpg|png)$/, '.webp')
  )

  try {
    // Resize and convert to WebP
    await sharp(inputPath)
      .resize(1200, 900, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .webp({ quality: 80 })
      .toFile(outputPath)

    console.log(`✓ Processed ${filename} to WebP`)
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error)
  }
}

// Process all images
async function processAllImages() {
  const files = fs.readdirSync(inputDir)
  const imageFiles = files.filter((file) => /\.(jpg|png)$/i.test(file))

  console.log(`Found ${imageFiles.length} images to process...`)

  for (const file of imageFiles) {
    await processImage(file)
  }

  console.log('Done!')
}

processAllImages()
