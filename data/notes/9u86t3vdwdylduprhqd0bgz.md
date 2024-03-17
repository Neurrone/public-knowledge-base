
# Running LLMs Locally

## Local Inference

These are wrappers over llama.cpp

- [Lambdafile](https://simonwillison.net/2023/Nov/29/llamafile/)
- [Ollama](https://ollama.com/blog/windows-preview)
- [LlamaEdge](https://github.com/LlamaEdge/LlamaEdge): running models via WebAssembly

### Compiling llama.cpp

#### With Vulkan

Install the Vulkan SDK.

```sh
set VULKAN_SDK=C:\VulkanSDK\1.3.275.0
mkdir build
cd build
cmake .. --fresh -DLLAMA_AVX512=on -DLLAMA_AVX512_VBMI=on -DLLAMA_AVX512_VNNI=on -DLLAMA_VULKAN=on
cmake --build . --config Release
```

Test performance by:

```sh
main.exe -m "d:/downloads/llama-2-7b-chat.Q4_K_M.gguf" -p "Hi you how are you" -ngl 33
./llama-bench -m "d:/downloads/llama-2-7b-chat.Q4_K_M.gguf" -p 3968
```

Experiment: trying to get AOCL support working but it doesn't compile:

```sh
-DLLAMA_BLAS_VENDOR=AOCL-mt -DLLAMA_BLAS=ON -DBLAS_LIBRARIES="C:\Program Files\AMD\AOCL-Windows\amd-blis\lib\LP64\AOCL-LibBlis-Win-dll.dll" -DBLAS_INCLUDE_DIRS="C:\Program Files\AMD\AOCL-Windows\amd-blis\include\LP64"
```

#### ROCm

Didn't manage to get this to work, since AMD doesn't support the 7840U yet with ROCm.

Install visual studio C++ workload, and select the Clang tools.

Install ROCM (unchecking the visual studio extension as that causes an error), and Pyrl as well.

```sh
cmake.exe .. --fresh -G "Ninja" -DCMAKE_BUILD_TYPE=Release -DLLAMA_HIPBLAS=on -DLLAMA_AVX512_VBMI=on -DLLAMA_AVX512_VNNI=on -DCMAKE_C_COMPILER="clang.exe" -DCMAKE_CXX_COMPILER="clang++.exe" -DAMDGPU_TARGETS="gfx1100" -DCMAKE_PREFIX_PATH="C:\Program Files\AMD\ROCm\5.7"

cmake --build . --config Release
```

Trying to run it results in an error saying that the tensor for GFX1103 isn't found. The commonly suggested solution to set `HSA_OVERRIDE_GFX_VERSION=11.0.0` only works on Linux.

Other relevant links:

* [Notes on AMD GPUs](https://llm-tracker.info/howto/AMD-GPUs)
* [UMA support](https://www.reddit.com/r/LocalLLaMA/comments/18ny92b/full_memory_available_for_amd_apus/)

## Frontends

- [open-webui](https://github.com/open-webui/open-webui)
- [gptcmd](https://github.com/codeofdusk/gptcmd)
- [LLM Python package](https://pypi.org/project/llm/)
- [VOLlama](https://github.com/chigkim/VOLlama/)

## Models

- [Run Llama 2 uncensored locally](https://ollama.com/blog/run-llama2-uncensored-locally)
- [OpenAssistant](https://github.com/LAION-AI/Open-Assistant?tab=readme-ov-file)
- [Gemma models from Google](https://ai.google.dev/gemma)

## Related

- [awesome-local-ai](https://github.com/janhq/awesome-local-ai)
- [Awesome Local LLMs](https://github.com/vince-lam/awesome-local-llms)
- [HN thread on OpenAPI compatibility](https://news.ycombinator.com/item?id=39307330)
