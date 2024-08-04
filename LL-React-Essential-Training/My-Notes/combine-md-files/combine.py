import os


def append_markdown_files(input_directory, output_file):
    with open(output_file, "w", encoding="utf-8") as outfile:
        for filename in os.listdir(input_directory):
            if filename.endswith(".md"):
                file_path = os.path.join(input_directory, filename)
                with open(file_path, "r", encoding="utf-8") as infile:
                    outfile.write(infile.read())
                    outfile.write("\n\n")  # Add a newline between files for separation


current_directory = os.path.dirname(os.path.abspath(__file__))
input_directory = os.path.dirname(current_directory)
output_file = os.path.join(current_directory, "combined-notes.md")

append_markdown_files(input_directory, output_file)
