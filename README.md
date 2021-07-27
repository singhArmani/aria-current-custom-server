## What this is about?
As described in my blog article about [using aria-current for active nav links](), this code demonstrates how our first solution could lead to a bug when using dynamic routes in a custom server setup. 

## Using aria-current attribute in our active page links

Aria-current attribute can not only be used to visually style active link among set of related page links, but also to aid users relying on assistive technologies. 
By using `aria-current="page"` attribute, the screen reader would announce the name of the currently active page. 


## Time for some action
- To see the buggy code, you need to be on the master branch, and run: 
> yarn dev

After you have visualized the bug, you can switch to `inject-aria-current-dynamic-routes` branch. 



## Thoughts
Please feel free to drop in your comments over my article. Thanks again.

