def remove_duplicate_words(s):
    return ' '.join(set(s.split(' ')))

def remove_duplicate_words(s):
    unique_words = {}
    for word in s.split(' '):
        unique_words[word] = True

    return ' '.join(unique_words.keys())

print(remove_duplicate_words('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

assert remove_duplicate_words('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') == 'alpha beta gamma delta'

print("PASS")
