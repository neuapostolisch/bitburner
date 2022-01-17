/** @param {NS} ns **/
export async function main(ns) {
	let connected = ns.scan(ns.getHostname());
	while (connected != 0) {
		let val = connected.pop();
		if (ns.getServerNumPortsRequired(val) == 0) {
			await ns.nuke(val);
			await ns.installBackdoor(val)
		}
	}
}
