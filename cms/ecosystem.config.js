module.exports = {
    apps: [{
        name: 'StarBalmCms',
        exec_mode: 'cluster',
        instances: 1, // Or a number of instances
        script: 'npm',
        args: 'start',
    }]
}