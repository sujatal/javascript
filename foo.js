for (const i=0 ; i<= 60 ; i++ )
{ 
    if( i % 3 == 0 && i % 5 == 0)
    {
        return "fooBar";
    } 
     else if ( i % 3 == 0 )
    {
      return "foo";
    }
    else if ( i % 5 == 0)
    {
        return "Bar";
    }

}
