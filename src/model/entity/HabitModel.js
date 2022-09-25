export class HabitModel {
    /**
     * @param {number} id
     * @param {string} title
     * @param {string} startDate
     * @param {string} endDate
     * @param {number} progressPercent
     * @param progress
     */
    constructor({
                    id=0 ,
                    title='이름 없음',
                    startDate= new Date().format("yyyy-MM-dd"),
                    endDate=new Date().setDateExtension(true, 66),
                    progressPercent=0,
                    progress = new Date().dateRange(66)
                } = {}) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.progressPercent = progressPercent;
        this.progress = progress;
    }

    getInitHabitList() {
        return [
            this
        ]
    }
}