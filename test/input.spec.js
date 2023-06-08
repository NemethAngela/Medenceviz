describe('Input tesztek', () => {
    it ('Szám', () => {         
        let actual = checkInput(3);
        expect(actual).toBe(true);   
    });

    it ('Szöveg', () => {        
        let actual = checkInput('aa');
        expect(actual).toBe(false);   
    });
});