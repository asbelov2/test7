import moment from 'moment'

function doThings(response) {
  console.log(uniqueDates(response))
  console.log(countMistakes(response))
  getDurationByDate(response)
}

function uniqueDates(data) {
  return [...new Set(data.map(x => x.start).map(date => date.split(' ')[0]))]
}

function prepareDataByUniqueDate(data) {
  return uniqueDates(data).map(date => data.filter(x => x.start.split(' ')[0] === date))
}

function countMistakes(data) { 
  return prepareDataByUniqueDate(data).map(dateData => dateData.map(x => {
    return x.exam.map(y => y.examInfoCheck === 0 ? 1 : 0).reduce((a,b) => a + b)
  }).reduce((a,b) => a + b))
}

function getDurationByDate(data) {
  return data.map(x => {
    let start, finish
    let mstart, mfinish
    start = x.start.split(' ')
    finish = x.finish.split(' ')
    start[0] = start[0].split('.')
    start[1] = start[1].split(':')
    finish[0] = finish[0].split('.')
    finish[1] = finish[1].split(':')
    mstart = moment({year:start[0][2], month:start[0][1], day:start[0][0], hour:start[1][0], minute:start[1][1], second:start[1][2] })
    mfinish = moment({year:finish[0][2], month:finish[0][1], day:finish[0][0], hour:finish[1][0], minute:finish[1][1], second:finish[1][2] })
    let duration = moment.duration(mfinish - mstart)
    console.log(
      `
      Years: ${duration.years()}
      Months: ${duration.months()}
      Days: ${duration.days()}
      Hours: ${duration.hours()}
      Minutes: ${duration.minutes()}
      Seconds: ${duration.seconds()}
    `)
  })
}

const response = [
    {
        "id": 17,
        "name": "scene name 1",
        "type": "Экзаменационный",
        "userId": 2,
        "result": "Провал",
        "vrName": "ДКС",
        "step": "4",
        "progress": "2",
        "time": {
            "id": 32,
            "start": "25.01.2023 10:36:31",
            "finish": "25.01.2023 10:37:04"
        },
        "start": "25.01.2023 10:36:31",
        "finish": "25.01.2023 10:37:04",
        "exam": [
            {
                "id": 21,
                "examInfoNumberStep": 0,
                "examInfoNameStep": "step 1",
                "examInfoCheck": 1,
                "examInfoCheckTrue": 1,
                "critical": 1,
                "sceneId": 17
            },
            {
                "id": 22,
                "examInfoNumberStep": 1,
                "examInfoNameStep": "step 2",
                "examInfoCheck": 1,
                "examInfoCheckTrue": 1,
                "critical": 1,
                "sceneId": 17
            },
            {
                "id": 23,
                "examInfoNumberStep": 2,
                "examInfoNameStep": "step 3",
                "examInfoCheck": 0,
                "examInfoCheckTrue": 0,
                "critical": 1,
                "sceneId": 17
            },
            {
                "id": 24,
                "examInfoNumberStep": 3,
                "examInfoNameStep": "step 4",
                "examInfoCheck": 1,
                "examInfoCheckTrue": 0,
                "critical": 0,
                "sceneId": 17
            },
            {
                "id": 25,
                "examInfoNumberStep": 4,
                "examInfoNameStep": "step 5",
                "examInfoCheck": 0,
                "examInfoCheckTrue": 0,
                "critical": 0,
                "sceneId": 17
            }
        ]
    },
    {
        "id": 22,
        "name": "scene name 2",
        "type": "Экзаменационный",
        "userId": 2,
        "result": "Успех",
        "vrName": "ДКС",
        "step": "0",
        "progress": "0",
        "time": {
            "id": 41,
            "start": "01.02.2023 11:11:46",
            "finish": "01.02.2023 11:19:52"
        },
        "start": "01.02.2023 11:11:46",
        "finish": "01.02.2023 11:19:52",
        "exam": [
            {
                "id": 68,
                "examInfoNumberStep": 0,
                "examInfoNameStep": "step 1",
                "examInfoCheck": 1,
                "examInfoCheckTrue": 1,
                "critical": 0,
                "sceneId": 22
            },
            {
                "id": 69,
                "examInfoNumberStep": 1,
                "examInfoNameStep": "step 2",
                "examInfoCheck": 0,
                "examInfoCheckTrue": 0,
                "critical": 0,
                "sceneId": 22
            },
            {
                "id": 70,
                "examInfoNumberStep": 2,
                "examInfoNameStep": "step 3",
                "examInfoCheck": 1,
                "examInfoCheckTrue": 1,
                "critical": 0,
                "sceneId": 22
            },
            {
                "id": 71,
                "examInfoNumberStep": 3,
                "examInfoNameStep": "step 4",
                "examInfoCheck": 0,
                "examInfoCheckTrue": 0,
                "critical": 0,
                "sceneId": 22
            },
            {
                "id": 72,
                "examInfoNumberStep": 4,
                "examInfoNameStep": "step 5",
                "examInfoCheck": 1,
                "examInfoCheckTrue": 1,
                "critical": 0,
                "sceneId": 22
            }
        ]
    },
    {
        "id": 27,
        "name": "scene name 3",
        "type": "Экзаменационный",
        "userId": 2,
        "result": "Провал",
        "vrName": "ДКС",
        "step": "36",
        "progress": "1",
        "time": {
            "id": 56,
            "start": "01.02.2023 13:40:24",
            "finish": "01.02.2023 13:40:43"
        },
        "start": "01.02.2023 13:40:24",
        "finish": "01.02.2023 13:40:43",
        "exam": [
            {
                "id": 215,
                "examInfoNumberStep": 0,
                "examInfoNameStep": "step 1",
                "examInfoCheck": 1,
                "examInfoCheckTrue": 1,
                "critical": 0,
                "sceneId": 27
            },
            {
                "id": 216,
                "examInfoNumberStep": 1,
                "examInfoNameStep": "step 2",
                "examInfoCheck": 0,
                "examInfoCheckTrue": 0,
                "critical": 0,
                "sceneId": 27
            },
            {
                "id": 217,
                "examInfoNumberStep": 2,
                "examInfoNameStep": "step 3",
                "examInfoCheck": 0,
                "examInfoCheckTrue": 0,
                "critical": 0,
                "sceneId": 27
            },
            {
                "id": 218,
                "examInfoNumberStep": 3,
                "examInfoNameStep": "step 4",
                "examInfoCheck": 0,
                "examInfoCheckTrue": 0,
                "critical": 0,
                "sceneId": 27
            },
            {
                "id": 219,
                "examInfoNumberStep": 4,
                "examInfoNameStep": "step 5",
                "examInfoCheck": 0,
                "examInfoCheckTrue": 0,
                "critical": 0,
                "sceneId": 27
            }
        ]
    }
]

doThings(response)