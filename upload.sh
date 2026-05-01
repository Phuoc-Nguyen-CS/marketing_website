#!/bin/bash

TARGET_DIR="/Users/phuocnguyen/Downloads/graphics/*"
BUCKET_NAME="portfolio-media"
FOLDER_NAME="graphics" # Specify your folder here

for file in $TARGET_DIR; do
  if [ -f "$file" ]; then
    FILENAME=$(basename "$file")
    echo "Uploading to $FOLDER_NAME: $FILENAME..."
    
    npx wrangler r2 object put "$BUCKET_NAME/$FOLDER_NAME/$FILENAME" --file "$file" --remote
  fi
done