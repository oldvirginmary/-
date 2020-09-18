Vue.component("equipments-list", {
    props: ["equipments"],
    template: "#equipments-list-template",
    data: function () {
        return {
            hints: [],
        }
    },
    methods: {
        openHint: function (event) {
            this.hints.forEach(function (hint) {
                hint.classList.remove("hint--opened");

                if (hint === event.target.parentNode) {
                    hint.classList.add("hint--opened");
                }
            });
        },
        closeHint: function () {
            this.hints.forEach(function (hint) {
                hint.classList.remove("hint--opened");
            });
        }
    },
    mounted: function () {
        this.hints = document.querySelectorAll(".hint");
    }
});

let vm = new Vue({
    el: "#app",
    data: {
        equipments: [
            {
                id: 1,
                title: `УАЗ Patrol`,
                description: `Подготовленный УАЗ Patrol подойдет для ситуаций связанных с легковой техникой,
                    в том числе мотоциклов и квадроциклов,
                    подробности уточняйте по телефону`
            },
            {
                id: 2,
                title: `ГАЗ-66`,
                description: `Машина советского производства с повышенной проходимостью,
                    подходит для помощи в сложных ситуациях связанных с
                    автомобилями от 2.5 тонн, подробности уточняйте по телефону`
            },
        ]
    }
});