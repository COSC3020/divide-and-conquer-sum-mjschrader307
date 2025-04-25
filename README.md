# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into _three_ sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

---

Answer:

I would think that partitioning the subarrays into thirds, fourths, fifths, etc. would have the same overall time complexity asymptotically, but in practice, splitting it into more parts would be faster. Although, if you split
the array into the same number of partitions as there are elements, it would be linear, which would be no better
than just having a sum counter and iterating through the array. There's probably a happy medium somewhere.

Anyway, the recurrence relation would look like:

$$
T(n) = \begin{cases}
      1 & \text{if } n <= 1 \\
      3T(\frac{n}{3}) + 2 & \text{if } x > 1 \\
   \end{cases}
$$

$3T(\frac{n}{3}) + 2 = 3[3T(\frac{n}{9} + 2] + 2 = 9T(\frac{n}{9}) + 4 = ... = 3^kT(3^{-k}n) + 2^k$

Let $k = \log_3(n)$:

$3^{\log_3(n)}T(3^{-\log_3(n)}n) + 2^{\log_3(n)} = nT(1) + 2^{\log_3(n)} = n + 2^{\log_3(n)}$

The second term, $2^{\log_3(n)}$, is neglible asymtotically, so the final runtime complexity is $\Theta(n)$.

---

**I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.**
