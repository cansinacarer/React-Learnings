import os


def append_markdown_files(input_directory, output_file):
    with open(output_file, "w", encoding="utf-8") as outfile:
        for filename in os.listdir(input_directory):
            if filename.endswith(".md"):

                file_path = os.path.join(input_directory, filename)
                with open(file_path, "r", encoding="utf-8") as infile:
                    outfile.write(infile.read())
                    outfile.write("\n\n")  # Add a newline between files for separation


def generate_table_of_contents(temp_file, output_file):
    with open(temp_file, "r", encoding="utf-8") as infile:
        lines = infile.readlines()

    table_of_contents = ""
    for line in lines:
        if line.startswith("## "):
            heading = line.strip("#").strip()
            table_of_contents += (
                f"- [{heading}](#{heading.lower().replace(' ', '-')})\n"
            )

    with open(output_file, "w", encoding="utf-8") as outfile:
        outfile.write("# Table of Contents\n\n")
        outfile.write(table_of_contents)
        outfile.write("\n")
        outfile.write("## Contents\n\n")
        outfile.writelines(lines)


current_directory = os.path.dirname(os.path.abspath(__file__))
input_directory = os.path.dirname(current_directory)
temp_file = os.path.join(current_directory, "temp_file.md")
output_file = os.path.join(current_directory, "combined-notes.md")

if __name__ == "__main__":
    # Merge the files
    append_markdown_files(input_directory, temp_file)

    # Call the function to generate the table of contents
    generate_table_of_contents(temp_file, output_file)

    # Delete temp_file
    os.remove(temp_file)
