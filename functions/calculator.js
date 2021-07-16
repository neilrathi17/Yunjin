function execute(args)
{
    resin=160-args;
    time=resin*8;
    time=time/60;
    return time+"hours more for full resin";
}
module.exports={execute}