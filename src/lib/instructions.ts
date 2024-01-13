import { EXTENSIONS, EXERCISE_DIRECTORY } from "@/common/constants"
import { Directory, Instruction } from "@/types/app"
import path from "node:path"
import { markdownToHtml } from "./ast"
import { filterFiles, readDirectory, readFile } from "./fileUtils"
import { addLeadingZero } from "./helpers"

export const getInstructions = async (
  directory: Directory
): Promise<Instruction[]> => {
  const newDirectory = EXERCISE_DIRECTORY[directory]
  const files = readDirectory(newDirectory)
  const filesMarkdown = filterFiles(files, `.${EXTENSIONS.md}`)

  const instructions = await Promise.all(
    filesMarkdown.map(async (fileName) => {
      // Remove ".md" from file name
      const id = fileName.replace(/\.md$/, "")

      // Read markdown file as string
      const fullPath = path.join(newDirectory, fileName)
      const fileContent = readFile(fullPath)

      const fileHtml = await markdownToHtml(fileContent)

      //Combine the data with the id
      return {
        id,
        title: getTitle(fileHtml),
        description: getDescription(fileHtml),
        contents: fileHtml,
      } satisfies Instruction
    })
  )

  return instructions
}

export const getTitle = (file: string) => {
  const title = file.match(/<h1>(.*?)<\/h1>/)?.slice(1, 2)[0]
  return title ?? "no title"
}

export const getDescription = (file: string) => {
  const newFile = file.replace(/💡/iu, "")
  const description = newFile.match(/<h3>(.*?)<\/h3>/)?.slice(1, 2)[0]
  return description ?? "no description"
}
export const getInstructionById = async (id: string, directory: Directory) => {
  const newDirectory = EXERCISE_DIRECTORY[directory]
  const newId = addLeadingZero(id)
  const fullPath = path.join(newDirectory, `/${newId}.${EXTENSIONS.md}`)
  const fileContents = readFile(fullPath)
  const file = await markdownToHtml(fileContents)

  return {
    id,
    title: getTitle(file),
    description: getDescription(file),
    contents: file,
  } satisfies Instruction
}
