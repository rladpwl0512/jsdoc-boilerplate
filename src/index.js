/** Class representing a VendingMachine. */
class VendingMachine {
	/**
	 * Create a VendingMachine with beverae.
	 * @param {number} iceAmericano - count of iceAmericano
 	 * @param {number} hotAmericano - count of hotAmericano
	 */
	
	constructor(iceAmericano, hotAmericano) {}

	/**
	 * 구매 결과를 console.log로 출력한다.
	 * example) === 아이스 아메리카노(1/10개)를 1000원에 구매했습니다. ===
	 * @param {number} charge - 투입 금액
	 * @return {void}
	 */
	getItem(charge) {}

	/**
	 * 투입 금액에 따른 커피 종류(아이스 아메리카노 or 따뜻한 아메리카노)를 반환한다.
	 * @param {number} charge - 투입 금액
	 * @return {string} - kindOfCoffee 커피 종류(아이스 아메리카노 or 따뜻한 아메리카노)
	 */
	checkKindOfBeverage(charge) {}

	/**
	 * 커피 종류(아이스 아메리카노 or 따뜻한 아메리카노)에 따라 자판기가 들고 있는 개수를 반환한다.
	 * @param {string} kindOfCoffee - kindOfCoffee 커피 종류(아이스 아메리카노 or 따뜻한 아메리카노)
	 * @return {number} 
	 */
	getCountOfBeverage(kindOfCoffee) {}
	
	/**
	 * 주어진 커피 종류(아이스 아메리카노 or 따뜻한 아메리카노) 개수를 하나 차감한다.
	 * @param {string} kindOfCoffee - kindOfCoffee 커피 종류(아이스 아메리카노 or 따뜻한 아메리카노)
	 * @return {void} 
	 */
	minusCountOfBeverage(kindOfCoffee) {}
}