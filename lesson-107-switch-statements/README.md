# Switch Statements

Switch statements are similar to 'if/else' statements, but are a bit more readable and convenient. 


For example say you've got something like: 


```javascript
function doSomethingToValue(value, action) {

    if (action === "increase-a-little") {
        return value + 1; 
    }
    else if (action === "increase-a-lot") {
        return value + 10; 
    }
    else if (action === "stay-the-same") {
        return value;
    }
    else if (action === "decrease-a-little") {
        return value -1; 
    }
    else if (action === "decrease-a-lot") {
        return value -10; 
    }    
}
```

We can do this, it's fine, but a switch statement is a bit more readable: 

```javascript
function doSomethingToValue2(value, action) {

    switch(action) {
        case "increase-a-little": {
            return value +1; 
        }
         case "increase-a-lot": {
            return value +10; 
        }
         case "stay-the-same": {
            return value; 
        }
         case "decrease-a-little": {
            return value -1; 
        }
         case "decrease-a-lot": {
            return value -10; 
        }

        // It's always good to have a default case - this condition will occur if none of the others do
        default : {
            return value; 
        }

    }

```


I will also mention that switch statements are one of the few places where I think `let` statements are ok. 

That is you might do something like: 


```javascript
    let valueChangeAmount; 
    switch(action) {
        case "increase-a-little": {
            valueChangeAmount = 1; 
        }
         case "increase-a-lot": {
            valueChangeAmount = 10; 
        }
         case "stay-the-same": {
            valueChangeAmount = 0; 
        }
         case "decrease-a-little": {
            valueChangeAmount = -1; 
        }
         case "decrease-a-lot": {
            valueChangeAmount = -10; 
        }
        default : {
            valueChangeAmount =0;
        }
    }
```