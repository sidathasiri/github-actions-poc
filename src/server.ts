import express from 'express';
import LaunchDarkly from 'launchdarkly-node-server-sdk';

const ldClient = LaunchDarkly.init('sdk-230b533e-aee5-48f5-8df9-9580df126839');

const app = express();

app.use('/health', (req, res) => {
    res.send({ status: 'UP' });
});

app.use('/flag-status/:id', async (req, res) => {
    const user = {
        firstName: 'Sidath',
        lastName: 'Munasinghe',
        key: req.params.id,
    };
    const flagStatus = await ldClient.variationDetail('my-flag', user, false);
    // const flagStatus = await ldClient.variationDetail('json-flag', user, false);
    // const flagStatus = await ldClient.allFlagsState(user);
    
    res.send({ flagStatus })
})

export default app;