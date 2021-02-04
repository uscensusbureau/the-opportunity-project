
### Here is markdown content included from another file

This is useful for including more complex markdown in the two-column layout.
 - for example
 - bulleted lists
 - are not handled well in frontmatter!

Or tables!

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

**Be sure that the file you are including is within the folder of the page it is being diplayed upon**

For example, this component section is displayed on `/pages/components.md` is written in `/pages/components/two-col-markdown-right.md`.  
This works because this component utilizes `include_relative`, and as specified in [the docs](https://jekyllrb.com/docs/includes/), "you cannot use the `../` syntax to specify an include location that refers to a higher-level directory."

_Note_: Unfortunately, code blocks are not handled properly using this technique. See `faqs.md` or `components.md` for examples on usage.