console.log(this);

const car = {
    marque: "Renault",
    getMarque() {
        console.log(this);
    },

    showMarque: () => {
        console.log(this);
    },
};

car.getMarque();
car.showMarque();