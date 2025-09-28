const sumAll = function(a, b) {

    let i;
    let sum = 0;
    if(a>0&&b>0&&Number.isInteger(a)&&Number.isInteger(b))
    {
        if(b>a)
        {
            for(i=a; i<=b; i++)
                    {
                        sum=sum+i;
                    }
                    return sum;
        }
        else
        {
            for(i=b; i<=a; i++)
                    {
                        sum=sum+i;
                    }
                    return sum;
        }
        
    }
    else
    {
        return 'ERROR';
    }

    
};

// Do not edit below this line
module.exports = sumAll;
