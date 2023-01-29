
# Floating Point Gotchas

This is a summary of [Examples of floating point problems](https://jvns.ca/blog/2023/01/13/examples-of-floating-point-problems/)

1. Gaps between floating point numbers get bigger.
   For example, `262144.0 + 0.01 = 262144.0` for 32-bit floats, as the next number after 262144.0 is 262144.03125
2. Several people mentioned issues with sending floats in JSON, whether either they were trying to send a large integer (like a pointer address) in JSON and it got corrupted, or sending smaller floating point values back and forth repeatedly and the value slowly diverging over time.
3. Naively computing the variance causes “catastrophic cancellation” – we’re subtracting two very large floating point numbers which are both going to be pretty far from the correct value of the calculation, so the result of the subtraction is also going to be wrong.
