function execute(args)
{
    resin=160-args;
    time=resin*8;
    time=Math.floor(time/60);
    var minutes=time%60;
    return [time,minutes]
}
module.exports={execute}
