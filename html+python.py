def generate_prompt(topic, level, familiar, focus, purpose):
    # Placeholder technique: Using curly braces {} to insert variables into a string
    prompt_template = """Goal:\nLearn about {}\n\nBackground:\nlevel of knowledge in this topic: {}\nFamiliar with {}\nTopics to focus on: {}\n\nLearning Resources:\nLooking for 2 Youtube videos:\nOne long video (in-depth explanation)\nOne shorter video (concise overview)\n\nSelection criteria:\nHigh like-to-view ratio (indicator of quality)\n\nRequest:\nPlease provide links to 2 Youtube videos that meet the above criteria. """
    prompt = prompt_template.format(topic, level, familiar, focus, purpose)
    return prompt

def main():
    # Taking user information
    topic_of_interest = input("Enter your topic of interest: ")
    knowledge_level = input("Enter your level of knowledge in this topic: ")
    topics_familiar = input("Enter familiar topics (keywords, separate with a comma): ")
    topics_to_be_focused = input("Enter topics that you want to focus on: ")
    # learning_purpose = input("Enter your purpose of learning (Project/Understanding concepts): ")

    # Generating prompt using placeholder technique
    prompt = generate_prompt(topic_of_interest, knowledge_level, topics_familiar, topics_to_be_focused)
    print("\nPrompt generated:")
    print(prompt)

    # Fetching data from HTML and CSS files
    with open("index.html", "r") as index_file:
        index_html = index_file.read()

    with open("style.css", "r") as style_file:
        style_css = style_file.read()

    with open("add_course.html", "r") as add_course_file:
        add_course_html = add_course_file.read()

    with open("add_course.css", "r") as add_course_style_file:
        add_course_css = add_course_style_file.read()

    with open("script.js", "r") as script_file:
        script_js = script_file.read()

    # Printing fetched data
    print("\nIndex HTML content:")
    print(index_html)

    print("\nStyle CSS content:")
    print(style_css)

    print("\nAdd Course HTML content:")
    print(add_course_html)

    print("\nAdd Course CSS content:")
    print(add_course_css)

    print("\nScript JS content:")
    print(script_js)

if __name__ == "__main__":
    main()
