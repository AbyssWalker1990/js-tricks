"use strict";
class ConcreteBuilder1 {
    constructor() {
        this.reset();
    }
    reset() {
        this.product = new Product1();
    }
    producePartA() {
        this.product.parts.push('PartA1');
    }
    producePartB() {
        this.product.parts.push('PartB1');
    }
    producePartC() {
        this.product.parts.push('PartC1');
    }
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
class Product1 {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log(`Product Parts: ${this.parts.join(', ')}\n`);
    }
}
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildMinimalViableProduct() {
        this.builder.producePartA();
    }
    buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
function main(director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);
    console.log('Standart basic Production:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standart full featured Production:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log('Custom Product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
const director = new Director();
main(director);
