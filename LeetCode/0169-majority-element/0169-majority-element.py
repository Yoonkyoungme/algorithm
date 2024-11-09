from collections import Counter
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        c = Counter(nums)
        n = len(nums)
        for k in c.keys():
            if c[k] >= n / 2:
                return k 