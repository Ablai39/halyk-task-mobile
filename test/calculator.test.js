describe('Calculator App Tests', () => {
    it('should add two numbers', async () => {
        await $('~2').click();
        await $('~+').click();
        await $('~3').click();
        await $('~=').click();
        const result = await $('~result').getText();
        expect(result).toEqual('5');
    });

    it('should subtract two numbers', async () => {
        await $('~5').click();
        await $('~-').click();
        await $('~2').click();
        await $('~=').click();
        const result = await $('~result').getText();
        expect(result).toEqual('3');
    });

    it('should multiply two numbers', async () => {
        await $('~4').click();
        await $('~*').click();
        await $('~3').click();
        await $('~=').click();
        const result = await $('~result').getText();
        expect(result).toEqual('12');
    });

    it('should divide two numbers', async () => {
        await $('~8').click();
        await $('~/').click();
        await $('~2').click();
        await $('~=').click();
        const result = await $('~result').getText();
        expect(result).toEqual('4');
    });

    it('should clear the result', async () => {
        await $('~5').click();
        await $('~C').click();
        const result = await $('~result').getText();
        expect(result).toEqual('0');
    });
});
