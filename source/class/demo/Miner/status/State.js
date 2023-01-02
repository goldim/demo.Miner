/* ************************************************************************

   Copyright: 2023 Dmitrii Zolotov

   License: MIT license

   Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru

************************************************************************ */

qx.Class.define("demo.Miner.status.State", {
    extend: qx.ui.form.Button,

    construct(){
        const width = 24;
        // noinspection JSAnnotator
        super(null);
        this.setWidth(width);
    },

    properties: {
        status: {
            init: "start",
            check: ["start", "over", "success"],
            event: "changeState",
            apply: "_applyStatus"
        }
    },

    members: {
        _applyStatus(value){
            const width = this.getWidth();
            const table = {
                start: "sentiment_satisfied_alt",
                over: "sentiment_very_dissatisfied",
                success: "sentiment_very_satisfied"
            };
            this.setIcon(`@MaterialIcons/${table[value]}/${width}`);
        }
    }
});