// import { __toLilynote } from '../../../js/lilypond.js';

const lily = require('../../../js/lilypond.js')
const Activity = require('../../../js/activity.js')
const Logo = require('../../../js/logo.js')
const Turtle = require('../../../js/turtle.js')

const act = new Activity()
const turtle = new Turtle()
act.logo = new Logo(act)

// const lilynote = lily.__toLilynote()
// jest.mock('__toLilynote', () => jest.fn())

describe('getLilypondHeader', () => {
    test('should set the font size', () => {
      expect(lily.getLilypondHeader()).not.toBeUndefined()
      expect(lily.getLilypondHeader()).not.toBe("")
      expect(lily.getLilypondHeader()).not.toBeNull()     
    })
  })
  

// act.logo = new Logo(act)
// // describe('blinking', () => {
// //   test('should set the font size', () => {
// //     expect(lily.saveLilypondOutput(act)).toBe("% You can change the MIDI instruments below to anything on this list\:
// //     % (http://lilypond.org/doc/v2.18/documentation/notation/midi-instruments)\\score \{ <<  >> \\layout {}· % MUSIC BLOCKS CODE % Below is the code for the Music Blocks project that generated this Lilypond file.  %{· [ %}·" )
// // })
// // })

describe('processLilypondNotes, when typeof obj == string', () => {
  test('should set the font size', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, "swing", false, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "swing", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tempo swing\n\\tempo swing\n\\tempo swing\n")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "tempo", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tempo 3 = 6\n")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "markup", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n^\\markup { \\abs-fontsize #6 { 6 } } ^\\markup { \\abs-fontsize #6 { 6 } } ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "markdown", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n_\\markup { 6 } _\\markup { 6 } ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "break", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\n\n")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "begin crescendo", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\< \\< \\< ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "end crescendo", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\! \\! \\! ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "begin decrescendo", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\> \\> \\> ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "end decrescendo", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\! \\! \\! ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "begin slur", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n(  (  (  ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "end slur", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n)  )  )  ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "begin articulation", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n->->->")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "end articulation", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "begin harmonics", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\harmonicsOn \\harmonicsOn \\harmonicsOn ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "end harmonics", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\harmonicsOff \\harmonicsOff \\harmonicsOff ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "tie", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n~~~")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "meter", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n \\time 3/4\n")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "pickup", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n \\partial 3\n \\partial 3\n")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "voice one", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n<< { \\voiceOne }\n\\new Voice { \\voiceOne }\n\\new Voice { \\voiceOne ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "voice two", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n<< { \\voiceTwo }\n\\new Voice { \\voiceTwo }\n\\new Voice { \\voiceTwo ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "voice three", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n<< { \\voiceThree }\n\\new Voice { \\voiceThree }\n\\new Voice { \\voiceThree ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "voice four", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n<< { \\voiceFour }\n\\new Voice { \\voiceFour }\n\\new Voice { \\voiceFour ")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "one voice", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n}\n>> \\oneVoice\n}\n>> \\oneVoice\n}\n>> \\oneVoice\n")
  })
  
  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "hi", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\nhihihi")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "key", true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n \\key esisisiseses \\major\n")
  })

  test('should set the font size', () => {
    act.logo.notation = true
    lily.processLilypondNotes(lily, act.logo, turtle, "key", true, "")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n \\key esisisiseses \\\n")
  })
})

describe('processLilypondNotes, when typeof obj != string', () => {
  test('should set the font size', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major")
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n   ")
  })

  test('should set the font size', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [1,3])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuple 8/1 { } \\tuple 8/1 { } \\tuple 8/1 { } ")
  })

  test('arr[0] == null', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [null, null])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n   ")
  })

  test('arr[0] != null, arr[0] * arr[1] <= 0', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [-1, 0])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n   ")
  })

  test('arr[0] != null, arr[0] * arr[1] <= 0, typeof notes != obj, arr[1] = 3', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [-1, 3])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n \\staccato  \\staccato  \\staccato ")
  })

  test('arr[0] != null, arr[0] * arr[1] <= 0, typeof notes != obj, arr[1] != 3', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [-1, 5])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n   ")
  })

  test('arr[0] != null, arr[0] * arr[1] <= 0, typeof notes == obj, arr[1] = 3', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [[1, 2, 3], 2, 3, 4, 5, 6], true, "major", [-1, 3])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n< note ''''' ''''' '''''>2.. \\staccato < note ''''' ''''' '''''>2.. \\staccato < note ''''' ''''' '''''>2.. \\staccato ")
  })

  test('arr[0] != null, arr[0] * arr[1] <= 0, typeof notes == obj, arr[1] = 3, len(notes) < 1', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [[], 2, 3, 4, 5, 6], true, "major", [-1, 3])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n2.. \\staccato 2.. \\staccato 2.. \\staccato ")
  })

  test('arr[0] != null, arr[0] * arr[1] <= 0, typeof notes == obj, arr[1] != 3', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [[1], 2, 3, 4, 5, 6], true, "major", [-1, 5])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n'''''2.. '''''2.. '''''2.. ")
  })

  test('arr[0] != null, arr[0] * arr[1] > 0', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [2, 3])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuple 4/1 { } \\tuple 4/1 { } \\tuple 4/1 { } ")
  })

  test('word[3] == tie', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [1,3], ["tie", "tie", "tie", "tie", "tie"])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuplet 1/2 { } ")
  })

  test('word[3] != tie', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [1,3], ["tie", "tie", "tie", "t", "tie"])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuple 8/1 { } \\tuple 8/1 { } \\tuple 8/1 { } ")
  })

  test('word[3] == null', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", [1,3], ["tie", "tie", "tie", null, "tie"])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuple 8/1 { } \\tuple 8/1 { } \\tuple 8/1 { } ")
  })

  test('word[3][0] == arr[0]', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", ["1","3"], ["tie", "tie", "tie", "13", "tie"])
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuple 8/1 { } \\tuple 8/1 { } \\tuple 8/1 { } ")
  })

  test('word[4] > 5', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", ["1",3], ["tie", "tie", "tie", "13", 7], false)
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuplet 1/2 { } ")
  })

  test('word[4] < 5', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", ["1",3], ["tie", "tie", "tie", "13", 2], false)
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuplet 1/1 { } ")
  })

  test('word[4] = 5', () => {
    act.logo.notation = false
    lily.processLilypondNotes(lily, act.logo, turtle, [1, 2, 3, 4, 5, 6], true, "major", ["1",3], ["tie", "tie", "tie", "13", 5], false)
    expect(act.logo.notationNotes[turtle]).toBe("\\meter\n\\tuplet 1/1 { } ")
  })

  

  test('should set the font size', () => {
    act.logo.notation = false
    expect(() => {
      lily.processLilypondNotes(lily, act.logo, turtle, 14, true, "major");
    }).toThrow("Obj should be a string or an array");
  })
})

describe('__processTuplet when i + j - 1 < 10', () => {
  test('nextObj === ")"', () => {
    lily.__processTuplet(act.logo, turtle, 0, -1, ")", null)
    expect(act.logo.notationNotes[turtle]).toContain(")}")
  })

  test('nextObj === "markup"', () => {
    lily.__processTuplet(act.logo, turtle, 0, -1, "markup", null)
    expect(act.logo.notationNotes[turtle]).toContain("^\\markup { \\abs-fontsize #6 { ")
  })

  test('nextObj === "markdown"', () => {
    lily.__processTuplet(act.logo, turtle, 0, -1, "markdown", null)
    expect(act.logo.notationNotes[turtle]).toContain("_\\markup {")
  })
})

describe('__processTuplet when k < count, and notes is of type object', () => {
  test('when len of notes <= 1', () => {
    arr = new Array()
    arr.push(1)
    act.logo.notationNotes[turtle] = ""
    lily.__processTuplet(act.logo, turtle, 0, 3, ")", arr)
    expect(act.logo.notationNotes[turtle]).not.toContain("<")
    expect(act.logo.notationNotes[turtle]).not.toContain(">")
    expect(act.logo.notationNotes[turtle]).toContain("''''' 3''''' 3''''' 3")
  })
  
  test('when len of notes > 1', () => {
    arr = new Array()
    for (var i = 0; i < 7; i++) {
      arr.push(i)
    }
    act.logo.notationNotes[turtle] = ""
    lily.__processTuplet(act.logo, turtle, 0, 5, ")", arr)
    expect(act.logo.notationNotes[turtle]).toContain("<")
    expect(act.logo.notationNotes[turtle]).toContain(">")
    expect(act.logo.notationNotes[turtle]).toContain(" \\staccato ")
    expect(act.logo.notationNotes[turtle]).toContain("''''' ''''' ''''' ''''' ''''' ''''' '''''")
  })

  test('when len of notes > 1 and not notes[6]', () => {
    arr = new Array()
    for (var i = 0; i < 5; i++) {
      arr.push(i)
    }
    act.logo.notationNotes[turtle] = ""
    lily.__processTuplet(act.logo, turtle, 0, 5, ")", arr)
    expect(act.logo.notationNotes[turtle]).toContain("<")
    expect(act.logo.notationNotes[turtle]).toContain(">")
    expect(act.logo.notationNotes[turtle]).not.toContain(" \\staccato ")
    expect(act.logo.notationNotes[turtle]).toContain("''''' ''''' ''''' ''''' '''''")
  })

  test('should set the font size', () => {
    lily.__processTuplet(act.logo, turtle, 0, -1, "markup")
    expect(act.logo.notationNotes[turtle]).toContain("^\\markup { \\abs-fontsize #6 { ")
  })

  test('should set the font size', () => {
    lily.__processTuplet(act.logo, turtle, 0, -1, "markdown")
    expect(act.logo.notationNotes[turtle]).toContain("_\\markup {")
  })
})

describe('__processTuplet when k < count', () => {
  test('notaionNotes should be correct when notes = "tie"', () => {
    lily.__processTuplet(act.logo, turtle, 0, 5, ")", "tie")
    expect(act.logo.notationNotes[turtle]).toContain("~~~~~")
  })

  test('notaionNotes should be correct when notes is not obj or "tie"', () => {
    act.logo.notationNotes[turtle] = ""
    lily.__processTuplet(act.logo, turtle, 0, 5, ")", "who")
    expect(act.logo.notationNotes[turtle]).not.toContain("~~~~~")
    expect(act.logo.notationNotes[turtle]).not.toContain(">")
    expect(act.logo.notationNotes[turtle]).not.toContain("<")
    expect(act.logo.notationNotes[turtle]).not.toContain("3")
    expect(act.logo.notationNotes[turtle]).not.toContain("\\staccato")
  })
})

describe('__toLilynote', () => {
  test('should set the font size', () => {
    let temp = lily.__toLilynote("some string")
    expect(temp).not.toBeNull()
    expect(temp).not.toBeUndefined()
    expect(temp).not.toBe("")
    expect(lily.__toLilynote("hi")).toBe("hi")
    expect(lily.__toLilynote(3)).toBe("'''''")
    expect(temp.toLowerCase()).toEqual(temp)
    expect(temp).toMatch(/\b[^\d\W]+\b/g) // write regex for any string without digits
  })

})