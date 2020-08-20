def isLucky(n)

    arr = n.to_s.split(//).map{|num| num.to_i}

    left,right = arr.each_slice( (arr.size/2.0).round ).to_a
    
    one = left.inject(0, &:+)
    two = right.inject(0, &:+)
    
    if one == two 
        return true 
        else 
        return false
    end  
    
end

