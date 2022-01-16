/*** @param {NS} ns**/
export async function main(ns) {
    let target = "n00dles";
    let minSecurity = ns.getServerMinSecurityLevel(target);
    let growThresh = ns.getServerMaxMoney(target) * 0.8;

    while(true){
        if (ns.getServerSecurityLevel(target) > minSecurity + 10){
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < growThresh){
            await ns.grow(target);
        } else {
            await ns.hack(target);
        }
    }
}
