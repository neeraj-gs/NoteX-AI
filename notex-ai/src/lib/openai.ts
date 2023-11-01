import {Configuration,OpenAIApi} from  'openai-edge'

const config =  new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)


export async function  generateImagePrompt(name:string){
    //takes a name and geneerates a image or a thumbnail 
    // this fucnitn is responsible for using open ai api and generate a descriptive text for a name notebook 

    //this is given to the other function to generate a detail description iamge

    try{
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages:[{
                role:'system',
                content:'You Are a Creative and Helpful AP Assistant capable  of generating interesting thumbnail descriptions for my notes. Your Output will be Fed to the DALLE API to generaate a thumbnail. The desription should be minimalistic and flat styled'
            },{
                role: 'user',
                content: `Please Generate a Thumbnaol description for my notebook title ${name}`
            }]
        })
        const data = await response.json();
        // const image_description = data.choices[0].message.content;
        // return image_description as string;
        
    }catch(error){
        console.log(error);
        throw error;
    }


}

export async function generateImage(image_description:string){
    try {
        const response = await openai.createImage({
          prompt: image_description,
          n: 1,
          size: "256x256",
        });
        const data = await response.json();
        const image_url = data.data[0].url;
        return image_url as string;
      } catch (error) {
        console.error(error);
      }

}