import os
import re

MAPPINGS = {
    "#0a0a0a": "background",
    "#0f0f0f": "graphite",
    "#1a1a1a": "charcoal",
    "#374151": "asphalt",
    "#6b7280": "steel",
    "#9ca3af": "steel-light",
    "#e5e7eb": "slate",
    "#ffffff": "white"
}

PREFIXES = ["bg-", "text-", "border-", "from-", "via-", "to-", "fill-", "stroke-", "ring-"]

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original_content = content

    for hex_code, var_name in MAPPINGS.items():
        for prefix in PREFIXES:
            # Replace e.g. bg-[#0a0a0a] with bg-background
            search_str = f"{prefix}[{hex_code}]"
            replace_str = f"{prefix}{var_name}"
            content = content.replace(search_str, replace_str)
            
            # Also handle capital hex codes
            search_str_cap = f"{prefix}[{hex_code.upper()}]"
            content = content.replace(search_str_cap, replace_str)
            
            # Also handle opacity variants like bg-[#0a0a0a]/50
            # A regex is better here: bg-\\[#0a0a0a\\](/\\d+)?
            pattern = re.compile(re.escape(f"{prefix}[{hex_code}]") + r"(\/\d+)?", re.IGNORECASE)
            def replacer(match):
                opacity = match.group(1) or ""
                return f"{prefix}{var_name}{opacity}"
            content = pattern.sub(replacer, content)

    # Next, we replace text-white with text-foreground globally,
    # except we should also rename text-black to text-background if it exists.
    content = content.replace("text-white", "text-foreground")
    # For opacity variants like text-white/50
    content = re.sub(r"text-white/(\d+)", r"text-foreground/\1", content)
    
    # Same for bg-white to bg-foreground
    content = content.replace("bg-white", "bg-foreground")
    content = re.sub(r"bg-white/(\d+)", r"bg-foreground/\1", content)

    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

def main():
    dirs_to_process = ['app', 'components']
    for current_dir in dirs_to_process:
        for root, dirs, files in os.walk(current_dir):
            for file in files:
                if file.endswith(('.tsx', '.ts', '.jsx', '.css')):
                    filepath = os.path.join(root, file)
                    process_file(filepath)

if __name__ == "__main__":
    main()
