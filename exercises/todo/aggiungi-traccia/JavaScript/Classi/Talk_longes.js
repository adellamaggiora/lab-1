class Talk {
    constructor(title, speaker, duration) {
        this.title = title
        this.speaker = speaker
        this.duration = duration
    }
}
class Lecture extends Talk {
    constructor(title, speaker, duration, course) {
        super(title, speaker, duration)
        this.course = course
    }
    get teacher() {
        return this.speaker
    }
    set teacher(newTeacher) {
        this.speaker = newTeacher
    }
}
class Seminar extends Talk {
    constructor(title, speaker, duration, event) {
        super(title, speaker, duration)
        this.event = event
    }
}
class Webinar extends Seminar {
    constructor(title, speaker, duration, event, online) {
        super(title, speaker, duration, event)
        this.online = true
    }
}

function pickSeminar(talks) {
    let seminars = talks.filter(talk => talk instanceof Seminar);
    if (seminars.length === 0) {
        return undefined;
    }
    let seminarioPiuLungo = seminars.reduce((max, seminario) => seminario.duration > max.duration ? seminario : max, seminars[0]);
    return seminarioPiuLungo.title
}