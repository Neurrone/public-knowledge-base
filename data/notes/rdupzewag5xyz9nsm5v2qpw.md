
# Parse, Don't Validate

This idea was popularized in this article, [Parse, don’t validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/).

The idea is to capture as much information in the type system as possible so that the program doesn't have to deal with invalid / undefined states everywhere, but at its boundaries. For example, a `NonEmpty` list enforces this invariant on the list.

Some other articles with the same ideas:

- [Type Safety Back and Forth](https://www.parsonsmatt.org/2017/10/11/type_safety_back_and_forth.html)
- [Ghosts of Departed Proofs (Functional Pearl)](https://kataskeue.com/gdp.pdf) [paper source](https://github.com/matt-noonan/gdp-paper)