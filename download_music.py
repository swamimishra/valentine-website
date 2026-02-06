import os
import urllib.request

url = "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3"
output_dir = "music"
output_file = os.path.join(output_dir, "background_music.mp3")

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print(f"Downloading {url} to {output_file}...")
urllib.request.urlretrieve(url, output_file)
print("Done.")
