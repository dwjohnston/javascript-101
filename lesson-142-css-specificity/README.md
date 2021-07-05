# CSS Specificity

Let's do an experiment. 

Say we have some HTML like this: 

```html
<p class ="my-class" id ="the-paragraph">Hello World!</p>
```

And some CSS like this: 

```css

#the-paragraph {
    border: solid 2px blue; 
}

.my-class {
    font-size: 20px; 
}

p {
    color: red; 
}





```

Then what happens? 

Well, each of these style rules applies to the element, and all of the styles apply. 

Now what happens if we have some thing like: 

```html
<p class ="my-class-2" id ="the-paragraph-2">Hello World2!</p>
```

And some CSS like this: 

```css

#the-paragraph {
    color: orange; 
}

.my-class-2 {
    color: blue; 
}

p {
    color: red; 
}

```

Which of the rules is going to win out? 

Well in this case we can see that the text is orange - the `#the-paragraph2` selector wins.

The rules for which which style rules take precedence is known as _CSS specificity_. 

## CSS Specificity


The rules are as follows. 



I find this diagram is helpful in explaining it. 

