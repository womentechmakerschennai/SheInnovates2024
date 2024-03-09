import pandas as pd
import numpy as np
import streamlit as st
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

def display_no_depression_tips():
    st.title("No Depression Detected")
    st.write("It seems that no signs of depression were detected.")
    st.write("Here are some tips to maintain mental well-being:")
    st.write("- Practice mindfulness and relaxation techniques.")
    st.write("- Engage in regular physical activity.")
    st.write("- Stay connected with loved ones.")
    st.write("- Seek professional help if needed.")

def display_moderate_depression_tips():
    st.title("Moderate Depression Detected")
    st.write("It appears that signs of moderate depression were detected.")
    st.write("Here are some tips to help cope with depression:")
    st.write("- Radiant Resilience: 🌈 Embrace your inner superhero! You're navigating a challenging chapter with courage and resilience. Every step forward is a victory dance waiting to happen.")
    st.write("- Bold Self-Care Brushstrokes: 🎨 Paint your world with bold strokes of self-care. From cozy cups of tea to dancing like nobody's watching, indulge in moments that whisper")
    st.write("- Vibrant Venting Sessions: 💬 Unleash your thoughts! Whether it's with a trusted friend, a journal, or a therapeutic howl to the moon, give your feelings the freedom to breathe.")
    st.write("- Sunshine Seeking: Chase the sun! Even if it's just a brief stroll, let the warmth of sunlight touch your face. Nature's embrace is a vibrant reminder that brighter days await.")

def display_severe_depression_tips():
    st.title("Severe Depression Detected")
    st.write("It seems that signs of severe depression were detected.")
    st.write("It is important to seek professional help immediately.")
    st.write("Here are some steps to take:")
    st.write("- Contact a mental health professional or therapist.")
    st.write("- Reach out to a trusted friend or family member.")
    st.write("- Consider helplines or support groups for assistance.")

# Load the dataset
f = "ML-DataSet_5.csv"
df = pd.read_csv(f)
df1 = df.drop(['f_id', 'duplicate_x', 'duplicate_y', 'duplicate_z', 'duplicate_v', 'duplicate_w', 
               'duplicate_a', 'dup_b', 'dup_c', 'Anxeity_Rec'], axis=1)
df1.fillna(df1.mean(), inplace=True)

# Selecting columns for Label Encoding
columns_to_encode = ['part1_country', 'Locality_first', 'part1_current_preg_first', 'anxious', 'Anxietyrec2',
                     'worry', 'relaxing', 'restless', 'annoyed', 'afraid', 'interest', 'hopeless',
                     'sleep cycle', 'tiredness', 'appetite', 'regret', 'focus', 'isolated', 'pessimism',
                     'AnxietyCat', 'DepressionCat', 'WomenAge', 'MariageAge', 'NumberofPregnancy',
                     'NumberofAbortions', 'EducationLevel', 'Work', 'CovidDiagL1', 'Health_Prob', 
                     'FamilyProblems', 'FinancialProblem', 'SocialProblem', 'PsychologicalProb',
                     'WorkStress', 'FamilyIncome1', 'Physical_activity_During_Cat', 
                     'Smoker_During_preg_Cat']

# Mapping for part1_country
part1_country_map = {
    1: "India",
    2: "USA",
    4: "Australia",
    6: "Saudi Arabia",
    8: "United Kingdom"
}
part1_country_map_reverse = {v: k for k, v in part1_country_map.items()}

# Mapping for Locality_first
locality_first_map = {
    1.0: "Urban",
    2.0: "Non Urban"
}
locality_first_map_reverse = {v: k for k, v in locality_first_map.items()}

# Mapping for part1_current_preg_first
part1_current_preg_first_map = {
    1: "Yes",
    2: "I was pregnant and gave birth during a pandemic"
}
part1_current_preg_first_map_reverse = {v: k for k, v in part1_current_preg_first_map.items()}

# Mapping for anxious
anxious_map = {
    0.0: "No",
    1.0: "Yes"
}
anxious_map_reverse = {v: k for k, v in anxious_map.items()}

# Mapping for Anxietyrec2
Anxietyrec2_map = {
    0.0: "Never",
    1.0: "Several days",
    2.0: "More than half of the days",
    3.0: "Almost everyday"
}
Anxietyrec2_map_reverse = {v: k for k, v in Anxietyrec2_map.items()}

# Mapping for DepressionRec2
DepressionRec2_map = {
    0.0: "Not at all",
    1.0: "Several Days",
    2.0: "More than half the days",
    3.0: "Nearly every day"
}
DepressionRec2_map_reverse = {v: k for k, v in DepressionRec2_map.items()}

# Mapping for GAD_7_Anxiety_score_Cat_first
GAD_7_Anxiety_score_Cat_first_map = {
    0: "No Anxiety",
    1: "Mild",
    2: "Moderate",
    3: "Severe anxiety"
}
GAD_7_Anxiety_score_Cat_first_map_reverse = {v: k for k, v in GAD_7_Anxiety_score_Cat_first_map.items()}

# Mapping for AnxietyCat_first
AnxietyCat_first_map = {
    1.0: "No Anxiety",
     2.0: "Moderate",
     3.0: "High"
}
AnxietyCat_first_map_reverse = {v: k for k, v in AnxietyCat_first_map.items()}

# Mapping for DepressionCat_first
DepressionCat_first_map = {
    1.0: "No Depression",
     2.0: "Moderate",
     3.0: "High"
}
DepressionCat_first_map_reverse = {v: k for k, v in DepressionCat_first_map.items()}

# Mapping for WomenAge
WomenAge_map = {
    1.0: "<35",
     2.0: ">=35"
}
WomenAge_map_reverse = {v: k for k, v in WomenAge_map.items()}

# Mapping for MariageAge
MariageAge_map = {
    1.0: "<20",
     2.0: "20-29",
     3.0: "30+"
}
MariageAge_map_reverse = {v: k for k, v in MariageAge_map.items()}

# Mapping for NumberofPregnancy
NumberofPregnancy_map = {
    1.0: "One",
     2.0: "Two",
     3.0: "Three",
     4.0: "Four +"
}
NumberofPregnancy_map_reverse = {v: k for k, v in NumberofPregnancy_map.items()}

# Mapping for NumberofAbortions
NumberofAbortions_map = {
    0.0: "Zero",
     1.0: "One time",
     2.0: "Two Time +"
}
NumberofAbortions_map_reverse = {v: k for k, v in NumberofAbortions_map.items()}

# Mapping for EducationLevel
EducationLevel_map = {
    1.0: "<= Secondary School",
     2.0: "> Secondary School"
}
EducationLevel_map_reverse = {v: k for k, v in EducationLevel_map.items()}

# Mapping for Work
Work_map = {
    1.0: "Yes",
     2.0: "No"
}
Work_map_reverse = {v: k for k, v in Work_map.items()}

# Mapping for CovidDiagL1
CovidDiagL1_map = {
    0.0: "No",
     1.0: "Yes"
}
CovidDiagL1_map_reverse = {v: k for k, v in CovidDiagL1_map.items()}

# Mapping for FamilyProblems
FamilyProblems_map = {
    0.0: "No",
     1.0: "Yes"
}
FamilyProblems_map_reverse = {v: k for k, v in FamilyProblems_map.items()}

# Mapping for FinancialProblem
FinancialProblem_map = {
    0.0: "No",
     1.0: "Yes"
}
FinancialProblem_map_reverse = {v: k for k, v in FinancialProblem_map.items()}

# Mapping for SocialProblem
SocialProblem_map = {
    0.0: "No",
     1.0: "Yes"
}
SocialProblem_map_reverse = {v: k for k, v in SocialProblem_map.items()}

# Mapping for PsychologicalProb
PsychologicalProb_map = {
    0.0: "No",
     1.0: "Yes"
}
PsychologicalProb_map_reverse = {v: k for k, v in PsychologicalProb_map.items()}

# Mapping for WorkStress
WorkStress_map = {
    0.0: "No",
     1.0: "Yes"
}
WorkStress_map_reverse = {v: k for k, v in WorkStress_map.items()}

# Mapping for FamilyIncome1
FamilyIncome1_map = {
    1.0: "Decreased",
     2.0: "Increased/Same"
}
FamilyIncome1_map_reverse = {v: k for k, v in FamilyIncome1_map.items()}

# Mapping for Physical_activity_During_Cat
Physical_activity_During_Cat_map = {
    0.0: "Inactive(<1/2 hour)",
     1.0: "Active (>=1/2 hour)"
}
Physical_activity_During_Cat_map_reverse = {v: k for k, v in Physical_activity_During_Cat_map.items()}

# Mapping for Smoker_During_preg_Cat
Smoker_During_preg_Cat_map = {
    0.0: "Non-smoker",
     1.0: "Smoker"
}
Smoker_During_preg_Cat_map_reverse = {v: k for k, v in Smoker_During_preg_Cat_map.items()}

# Splitting the data into features and target
X = df1.drop(['Depression_Rec1'], axis=1)
y = df1['Depression_Rec1']

# Splitting the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardizing the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Creating and training the RandomForestClassifier model
rf_classifier = RandomForestClassifier(random_state=42)
rf_classifier.fit(X_train_scaled, y_train)

# Function to predict Depression_Rec1
def predict_depression_rec(input_data):
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)
    std_data = scaler.transform(input_data_reshaped)
    prediction = rf_classifier.predict(std_data)
    return prediction

def main():
    st.title("Depression Recognition Prediction")
    st.write("Please select the values for the following features:")

    # User inputs
    part1_country = st.selectbox("part1_country", list(part1_country_map.keys()), format_func=lambda x: part1_country_map[x])
    Locality_first = st.selectbox("Locality_first", list(locality_first_map.keys()), format_func=lambda x: locality_first_map[x])
    part1_current_preg_first = st.selectbox("part1_current_preg_first", list(part1_current_preg_first_map.keys()), format_func=lambda x: part1_current_preg_first_map[x])
    anxious = st.selectbox("anxious", list(anxious_map.keys()), format_func=lambda x: anxious_map[x])
    Anxietyrec2 = st.selectbox("Anxietyrec2", list(Anxietyrec2_map.keys()), format_func=lambda x: Anxietyrec2_map[x])
    worry = st.selectbox("worry", [1, 2, 3])
    relaxing = st.selectbox("relaxing", [1, 2, 3])
    restless = st.selectbox("restless", [1, 2, 3])
    annoyed = st.selectbox("annoyed", [1, 2, 3])
    afraid = st.selectbox("afraid", [1, 2, 3])
    interest = st.selectbox("interest", [1, 2, 3])
    hopeless = st.selectbox("hopeless", [1, 2, 3])
    sleep_cycle = st.selectbox("sleep cycle", [1, 2, 3])
    tiredness = st.selectbox("tiredness", [1, 2, 3])
    appetite = st.selectbox("appetite", [1, 2, 3])
    regret = st.selectbox("regret", [1, 2, 3])
    focus = st.selectbox("focus", [1, 2, 3])
    isolated = st.selectbox("isolated", [1, 2, 3])
    pessimism = st.selectbox("pessimism", [1, 2, 3])
    AnxietyCat = st.selectbox("AnxietyCat", list(AnxietyCat_first_map.keys()), format_func=lambda x: AnxietyCat_first_map[x])
    DepressionCat = st.selectbox("DepressionCat", list(DepressionCat_first_map.keys()), format_func=lambda x: DepressionCat_first_map[x])
    WomenAge = st.selectbox("WomenAge", list(WomenAge_map.keys()), format_func=lambda x: WomenAge_map[x])
    MariageAge = st.selectbox("MariageAge", list(MariageAge_map.keys()), format_func=lambda x: MariageAge_map[x])
    NumberofPregnancy = st.selectbox("NumberofPregnancy", list(NumberofPregnancy_map.keys()), format_func=lambda x: NumberofPregnancy_map[x])
    NumberofAbortions = st.selectbox("NumberofAbortions", list(NumberofAbortions_map.keys()), format_func=lambda x: NumberofAbortions_map[x])
    EducationLevel = st.selectbox("EducationLevel", list(EducationLevel_map.keys()), format_func=lambda x: EducationLevel_map[x])
    Work = st.selectbox("Work", list(Work_map.keys()), format_func=lambda x: Work_map[x])
    CovidDiagL1 = st.selectbox("CovidDiagL1", list(CovidDiagL1_map.keys()), format_func=lambda x: CovidDiagL1_map[x])
    Health_Prob = st.selectbox("Health_Prob", [1, 2, 3])
    FamilyProblems = st.selectbox("FamilyProblems", list(FamilyProblems_map.keys()), format_func=lambda x: FamilyProblems_map[x])
    FinancialProblem = st.selectbox("FinancialProblem", list(FinancialProblem_map.keys()), format_func=lambda x: FinancialProblem_map[x])
    SocialProblem = st.selectbox("SocialProblem", list(SocialProblem_map.keys()), format_func=lambda x: SocialProblem_map[x])
    PsychologicalProb = st.selectbox("PsychologicalProb", list(PsychologicalProb_map.keys()), format_func=lambda x: PsychologicalProb_map[x])
    WorkStress = st.selectbox("WorkStress", list(WorkStress_map.keys()), format_func=lambda x: WorkStress_map[x])
    FamilyIncome1 = st.selectbox("FamilyIncome1", list(FamilyIncome1_map.keys()), format_func=lambda x: FamilyIncome1_map[x])
    Physical_activity_During_Cat = st.selectbox("Physical_activity_During_Cat", list(Physical_activity_During_Cat_map.keys()), format_func=lambda x: Physical_activity_During_Cat_map[x])
    Smoker_During_preg_Cat = st.selectbox("Smoker_During_preg_Cat", list(Smoker_During_preg_Cat_map.keys()), format_func=lambda x: Smoker_During_preg_Cat_map[x])

    input_data = [
        part1_country,
        Locality_first,
        part1_current_preg_first,
        anxious,
        Anxietyrec2,
        worry,
        relaxing,
        restless,
        annoyed,
        afraid,
        interest,
        hopeless,
        sleep_cycle,
        tiredness,
        appetite,
        regret,
        focus,
        isolated,
        pessimism,
        AnxietyCat,
        DepressionCat,
        WomenAge,
        MariageAge,
        NumberofPregnancy,
        NumberofAbortions,
        EducationLevel,
        Work,
        CovidDiagL1,
        Health_Prob,
        FamilyProblems,
        FinancialProblem,
        SocialProblem,
        PsychologicalProb,
        WorkStress,
        FamilyIncome1,
        Physical_activity_During_Cat,
        Smoker_During_preg_Cat
    ]

    if st.button("Predict"):
        # Assume predicted_outcome is the result from your model
        predicted_outcome = 1  # For example, 1 means No Depression

        if predicted_outcome == 1:
            display_moderate_depression_tips()
        elif predicted_outcome == 2:
            display_no_depression_tips()
        elif predicted_outcome == 3:
            display_severe_depression_tips()

if __name__ == '__main__':
    main()