export let data1: any = null;
export let data2: any = null;

 console.log('test#0', data1);
console.log('test#0', data2);

export const setData = async (fetchedData1: any, fetchedData2: any) => {
	data1 = await fetchedData1;
	data2 = await fetchedData2;

	console.log('test#1', data1);
	console.log('test#2', data2);
};

export const getData = () => {
	return { data1, data2 };
};
