
def max_sequence(arr):
  # used for testing the next highest sum in sequence
  end_max = 0

  # return value
  cur_max = 0

  for num in arr:

    # increment end_max by new num
    end_max = end_max + num

    # set cur_max to the new sum:end_max, if end_max is greater
    cur_max = end_max if cur_max < end_max else cur_max

    # if end_max is negative (< 0) reset it to 0
    if end_max < 0:
        end_max = 0

  return cur_max

assert max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
assert max_sequence([]) == 0

print("PASS")
