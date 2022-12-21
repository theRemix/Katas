def christmas_tree(height):
    branches = []
    last_branch = ""

    for line in range(height):
        width = (height-line) * 2 - 1
        padding = (line) * " "
        last_branch = padding + "*" * width + padding
        branches.append(last_branch)

    return "\n".join(branches[::-1])


assert christmas_tree(0) == ''
assert christmas_tree(1) == '*'
assert christmas_tree(2) == ' * \n***'
assert christmas_tree(3) == '  *  \n *** \n*****'

print("PASS")
