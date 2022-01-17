const dave = {
    name: "Dave",
    role: "drummer",
    skills: ["drumming", "headbanging"]
} as const

dave.name = "Leo"
dave.role = "Coder"
dave.skills.push("coding")

// ----------------------------------------------

function layout(settings: {
    align: 'left' | 'right' | 'center',
    padding: number
}) {
    console.log('Performing layout:', settings)
}

const example = {
    align: 'left' as const,
    padding: 4
}

layout(example);