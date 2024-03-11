def generate_prompt(topic, level,familiar,focus, purpose):
    # Placeholder technique: Using curly braces {} to insert variables into a string
    prompt_template = """Goal:\nLearn about {}\n\nBackground:\nlevel of knowledge in this topic: {}\nFamiliar with {}\nTopics to focus on: {}\n\nLearning Resources:\nLooking for 2 Youtube videos:\nOne long video (in-depth explanation)\nOne shorter video (concise overview)\n\nSelection criteria:\nHigh like-to-view ratio (indicator of quality)\n\nRequest:\nPlease provide links to 2 Youtube videos that meet the above criteria. """
    prompt = prompt_template.format(topic, level,familiar,focus, purpose)
    return prompt

def main():
    # Taking user information
    topic_of_interest = input("Enter your topic of interest: ")
    knowledge_level = input("Enter your level of knowledge in this topic: ")
    topics_familiar=input("Enter familiar topics(keywords,seperate with a comma): ")
    topics_to_be_focused=input("Enter topics that you want to focus on: ")
    learning_purpose = input("Enter your purpose of learning (Project/Understanding concepts): ")
    

    # Generating prompt using placeholder technique
    prompt = generate_prompt(topic_of_interest, knowledge_level,topics_familiar,topics_to_be_focused, learning_purpose)
    print("\nPrompt generated:")
    print(prompt)

if __name__ == "__main__":
    main()
