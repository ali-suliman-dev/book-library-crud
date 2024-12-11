const config = {
  openapi: "3.0.0",
  info: {
    title: "Books CRUD API",
    version: "1.0.0",
    description: "A simple CRUD API for managing books",
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Local development server",
    },
  ],
  paths: {
    "/books": {
      get: {
        summary: "Get all books",
        responses: {
          200: {
            description: "List of all books",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Book",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create a new book",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Book created successfully",
          },
        },
      },
    },
    "/books/{id}": {
      get: {
        summary: "Get a book by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "The ID of the book",
          },
        ],
        responses: {
          200: {
            description: "A single book",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Book",
                },
              },
            },
          },
          404: {
            description: "Book not found",
          },
        },
      },
      put: {
        summary: "Update a book by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "The ID of the book to update",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Book updated successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Book",
                },
              },
            },
          },
          404: {
            description: "Book not found",
          },
        },
      },
      delete: {
        summary: "Delete a book by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "The ID of the book to delete",
          },
        ],
        responses: {
          200: {
            description: "Book deleted successfully",
          },
          404: {
            description: "Book not found",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Book: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "The unique identifier of the book",
          },
          title: {
            type: "string",
            description: "The title of the book",
          },
        },
        required: ["title"],
      },
    },
  },
};

export default config;
