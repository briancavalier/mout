define(['./MAX_INT'], function(MAX_INT){

    /**
     * "Convert" value into an 31-bit unsigned integer (since 1 bit is used for sign).
     * IMPORTANT: value wil wrap at 2^31
     * @author Miller Medeiros
     * @version 0.2.0 (2011/11/23)
     */
    function toUInt(val){
        return (val <= 0)? 0 : (val > MAX_INT? ~~(val % (MAX_INT + 1)) : ~~val);
    }

    return toUInt;

});
